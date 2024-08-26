---
    title: 'Development'
    subtitle: 'teonite software development process'
    cover: '/images/services/dd.jpg'
   
---

# Teonite Software Delivery Process

**Author:** Michał Gryczka  
**Email:** [mike@teonite.com](mailto:mike@teonite.com)  
**Mobile:** +48 509 895 529  
**Version:** 2023.01v02  
**Copyright © Teonite**

## Table of Contents
1. [Executive Summary](#1-executive-summary)  
2. [Process Elements](#2-process-elements)  
    2.1. [Responsibility](#21-responsibility)  
    2.2. [Discovery Workshops](#22-discovery-workshops)  
    2.3. [Product Design](#23-product-design)  
    2.4. [Product Development](#24-product-development)  
        2.4.1. [Kickoff](#241-kickoff)  
        2.4.2. [Risk Assumption Test / Proof Of Concept](#242-risk-assumption-test--proof-of-concept)  
        2.4.3. [Delivering Software Increments](#243-delivering-software-increments)  
        2.4.5. [Quality Assurance](#245-quality-assurance)  
        2.4.6. [Process Improvements](#246-process-improvements)  
        2.4.7. [Roadmap and Cost Management](#247-roadmap-and-cost-management)  
        2.4.8. [Periodic Product Reviews](#248-periodic-product-reviews)  
    2.5. [Maintenance or Hand-off](#25-maintenance-or-hand-off)

## 1. Executive Summary

The Teonite Software Delivery Process (the process of building your product) is designed to maximize its value. This document will walk you through the entire product lifecycle.

As a stakeholder, you (or your representative) must be involved from the very early stages to ensure the final result meets specifications and matches business objectives.

Four phases of product creation are crafted by our experience:
- Identify value through discovery workshops
- Design the solution
- Develop the product
- Launch and maintain/hand-off

Value, by definition, is relative and only known to you. Therefore, the first step we take is to discover and understand what it means to you and your target audience/users. We call this step the Discovery Workshops. This phase is led by our most experienced senior business analysts. 

The length of this phase may vary depending on the level of prior preparation done by your team, project complexity, or project innovation level.

With an understanding of your domain, we start to design the solution (product blueprint). Preparing this blueprint before the start of development improves overall results by identifying pain points early on, ruling out blind alleys, and optimizing scope. For some clients, it’s also an important step to assess and approve the cost of development before it starts.

Based on the blueprint, the development phase is carried out with risk management in mind by incorporating RAT, POCs, and MVP approaches to ensure cost-optimal decision-making.

Teonite handles the full product lifecycle by providing support after the launch of the product or orchestrating a hand-off to your support team of choice.

The following document contains a detailed explanation of each phase.

## 2. Process Elements

### 2.1. Responsibility

Our responsibility is to deliver a quality result—a product that maximizes business value. 

Product is always a result of the proven design and development processes. We’ve tested, iterated, and improved them in over 100 projects. 

Thus, it is our responsibility to control who, when, and how executes the process, and who is engaged in what activities (analysis, design, coding, testing, collecting requirements, validation, etc.). Only we can decide what the team composition is at any given time of the project or how the process should work. This allows us to take full responsibility for the outcome.

Your responsibility is to clearly set business expectations, actively engage in requirements elicitation, and provide essential feedback on product increments.

### 2.2. Discovery Workshops

> “A problem defined is a problem half solved”  
> — Albert Einstein

**Purpose**  
The goal of workshops is to set the product development on course for success by defining project goals, objectives, and stakeholders' expectations. All following actions will be aligned with them.

**Why is this phase important?**  
Information gathered during this phase impacts product design, architecture, and development & management style. From your perspective (as a client), you want to have this information written down to acquire realistic project costs from potential technology providers. It is our requirement that this phase is done before we make any cost forecasts.

**Form**  
A series of meetings with key project stakeholders, focused on building a high-level 360° view of the project context. Usually takes a few days to complete (depending on the project scope and domain complexity).

**Results**  
The gathered information is documented in the form of a short high-level specification of the product.

After this step, you will receive a document with the specified:
- Business goals
- Product/system actors' description
- Use cases
- System boundaries and responsibilities
- Risk factors
- Project cost forecasts
- Development team composition proposal

**Recommended Next Steps After the Discovery Phase**
- Start Product Design: conduct detailed system analysis and design to make the estimation more accurate
- Start the Product Development in parallel with the Product Design phase
- Do a POC first to see if the risky areas are really a threat
- Limit the scope of the product to adjust the cost to meet budget expectations

### 2.3. Product Design

**Purpose**  
The goal of the design phase is to create a blueprint for the product so the development team has clear guidelines for the product's look and behavior. 

It enables the team to focus on particular aspects of implementation and quick problem-solving.

After this step, you will receive a document with the specified:
- Basic user stories
- User flows and key business processes
- Low-fi UI design / UI wireframes
- System architecture (physical/logical/technologies)
- Risk analysis
- Roadmap with MVP and milestones set
- Cost estimation on user stories level

**Form**  
Series of interviews and refinements with people with the most knowledge about the product domain. The agenda usually covers story mapping, live UI/UX wireframe design, problem-solving discussions, and consultations with the client's tech department.

**Benefits**
- Save time during development because the team has detailed guidelines about the functionalities, how the interface should look, and the planned architecture.
- You will get a much more accurate cost estimation.
- The project manager gets a framework for monitoring the cost of the system in the form of a project roadmap.

Product Design is continued during the development phase on a minor level. In some cases, Product Design and Development are tightly integrated and happen at the same time.

### 2.4. Product Development

**Purpose/Goal**  
The goal is always the same: deliver the highest value product.

**Form**  
Series of typically week-long phases called sprints. Each sprint consists of planning, working on the backlog, doing the actual work, assessing the process, and presenting the results. Some of those meetings require the client’s representative to be actively involved. 

**Benefits**  
The iterative process allows for frequent checkpoints, making it easier to monitor progress, the budget, and adapt to changing requirements. As the client’s representative is involved, the process is transparent.

**Results**  
After each sprint, you will get:
- Software increment ready to deploy to production
- System quality report
- Budget report
- Updated roadmap with time to market
- Updated cost estimation report
- Action points for process improvements

**Important Elements of the Process:**

#### 2.4.1. Kickoff

During the kickoff meeting, you’ll have a chance to meet the development team members. The meeting is all about figuring out who is responsible for what and how we are going to communicate (when and using what kind of channels). We basically create a “contract“ between the client and the development team that explains what can be expected of us. That means:
- What kind of results we will deliver
- When we are going to deliver them
- How and when we are going to communicate

This means that the development team will also have its demands from the client as we will definitely need the client's time and attention during the project.

A significant part of the kickoff meeting is establishing what is our:
- Definition of ready: how we are going to describe tasks for the developers (acceptance criteria, described architecture, assets, etc.)
- Definition of done: what needs to happen in order to consider a task as finished (code passing tests and deployed to the production environment, etc.)

Usually, it’s a half-day meeting that should allow the team to start working straight after it.

#### 2.4.2. Risk Assumption Test / Proof Of Concept

We always advise our clients to test their hypotheses as soon as possible to make sure they don’t waste money on products that are impossible to implement or simply the whole idea is missed.

That is why as the first step in the development phase we attack the riskiest parts of the product to validate the client’s or our own assumptions. We do that by performing a RAT test (Riskiest Assumption Test).

Basically, it means we figure out a way to test a risky assumption with minimum cost and we do it as soon as possible. It can have different forms depending on the product. It may be a landing page released to customers to see if our assumed audience is really interested. It might also be a POC (Proof of Concept) in the form of an implementation of a complicated algorithm that will be part of the solution.

For any test we pick, it’s always important to think about how we can measure the results to decide if the test passed or

 not.

#### 2.4.3. Delivering Software Increments

Teonite development teams work in an Agile (mostly SCRUM) way, following weekly or bi-weekly product increment releases. The goal is to deliver often and validate early, giving you the opportunity to adjust product requirements and build product awareness.

In each sprint, we focus on building the most valuable increment. This is possible thanks to:
- Planning what we’re going to deliver after this sprint
- What and how we’re going to deliver in the following sprints
- Is our SCRUM process effective
- The actual implementation
- Presenting a working software piece that we planned to deliver that you can already test for yourself

The process guarantees:
- The team is focused on the planned results
- You can see the new results with your own eyes very often (once a week)
- You are fully aware of what the team is currently working on and what you can expect at the end of the sprint
- We can quickly adapt to any changes in the scope of the product as we get more knowledge about it every week

#### 2.4.5. Quality Assurance

Our development teams always involve a tester. His responsibility is to maintain and execute test scenarios. A test scenario is a list of steps a user needs to take in order to do something about the product. It might be, for example, “Adding a new TODO in the app“. The tester ensures that each scenario is well described.

The scenarios are then implemented as automated tests, so pieces of code simulate user actions. Before the end of the sprint, we run the automated tests to make sure that all the functionalities delivered by the developers actually work and that the new functionalities did not break the ones that were already delivered.

Each sprint, the tester can add more test scenarios covering different use cases or edge cases of a use case to make sure we deliver a quality product.

#### 2.4.6. Process Improvements

After each sprint, the development team and the client gather for a Sprint retrospective meeting. The goal of the meeting is to figure out if our development process is effective.

Each team member can say what they think we do well and what needs improvement. Each remark is written down and addressed by creating an action point assigned to a person that should fix it.

That way the process adapts to project-specific conditions, the product, and the development team and becomes more effective every iteration.

#### 2.4.7. Roadmap and Cost Management

Requirements change over time. As you will have a chance to experience new parts of your product every week, you will get new ideas about it. Some functionalities might get dropped, some added, and some modified. Also, as we move forward with the development, our knowledge about the product increases, and we can make the cost estimation more accurate. All of that affects the project roadmap and the cost. After each sprint, we always update the roadmap and the cost calculation to make sure we are fully transparent about when you can expect your product to be delivered and how much it is going to cost you.

### 2.4.8. Periodic Product Reviews

Product Reviews are all about ensuring that the project is going in the right direction and is aligned with expectations.

In the context of long-term innovative projects, it’s crucial to look at the larger picture of product-market fit or business goals fulfillment periodically. In our process, requirements refinements and reviews are optimized for short-term goals, development speed, and efficiency.

The idea is to take a look at the venture from a high-level perspective because it’s easy to forget about the most important goals when the team gets caught up in resolving day-to-day tasks.

Review meetings may include business stakeholders, investors, or other key personnel interested in product progress but not actively engaged in its development.

### 2.5. Maintenance or Hand-off

After this step, you will get:
- Full system documentation
- Use cases
- Data flow
- Architecture
- Deployment
- Overtaking workshop or a maintenance and support team

After we are done with the development phase, you can decide how you want to handle the product in the future.

You might have an in-house maintenance team that will handle the support process. In that case, we can carry out an overtaking workshop to transfer all our knowledge to the new team. We do that by giving them detailed documentation about the project, presenting the development process, presenting the code, and giving access to all the required environments.

If you don’t have your own maintenance team, we can provide you with one. We make sure that the team gets all the knowledge to support you. We also always have at least one member of the development team in the support team. We can also pick all the tools required for the effective maintenance of your product.
```