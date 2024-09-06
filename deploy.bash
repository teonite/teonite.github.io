#!/bin/bash

# Define the local and remote paths
LOCAL_PATH="./dist"
REMOTE_PATH="/sites/teonite.com"

# Check if the LOCAL_PATH exists and has files
if [ ! -d "$LOCAL_PATH" ] || [ -z "$(ls -A "$LOCAL_PATH")" ]; then
    echo "Error: The directory $LOCAL_PATH does not exist or is empty. Aborting."
    exit 1
fi

# Define the namespace and pod name
NAMESPACE="dynamic-sites"
POD_NAME=$(kubectl get pods -n $NAMESPACE -l app=dynamic-sites -o jsonpath="{.items[0].metadata.name}")

# Check if POD_NAME is empty
if [ -z "$POD_NAME" ]; then
    echo "No pod found in namespace $NAMESPACE with the specified label."
    exit 1
fi

# Confirm action with the user
read -p "You are about to replace the contents of $REMOTE_PATH in pod $POD_NAME. Do you want to proceed? (yes/no): " CONFIRMATION

# Check if the user typed 'yes'
if [ "$CONFIRMATION" != "yes" ]; then
    echo "Operation aborted by the user."
    exit 0
fi

# Archive the local dist folder
tar -czf dist.tar.gz -C "$LOCAL_PATH" .

# # Copy the archive to the pod
kubectl cp dist.tar.gz $NAMESPACE/"$POD_NAME":/tmp/dist.tar.gz

# Confirm if the copy was successful by checking the presence of files in the target directory
CHECK_FILES=$(kubectl exec -n $NAMESPACE "$POD_NAME" -- /bin/sh -c "ls /tmp/dist.tar.gz")

if [ -z "$CHECK_FILES" ]; then
    echo "Error: The target directory $REMOTE_PATH in pod $POD_NAME is empty. Copy may have failed."
    exit 1
else
    echo "Copy succeeded. Contents of $LOCAL_PATH have been successfully copied to $POD_NAME:$REMOTE_PATH"
fi

# Remove the existing contents, and extract the new files
kubectl exec -n $NAMESPACE "$POD_NAME" -- /bin/sh -c "rm -rf $REMOTE_PATH/* && tar -xzf /tmp/dist.tar.gz -C $REMOTE_PATH"

# Clean up the tar file from the pod
kubectl exec -n $NAMESPACE "$POD_NAME" -- /bin/sh -c "rm /tmp/dist.tar.gz"

# Clean up the local tar file
rm dist.tar.gz

echo "Contents of $LOCAL_PATH have been successfully copied to $POD_NAME:$REMOTE_PATH"
