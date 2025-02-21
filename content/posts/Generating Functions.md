+++
title = "Generating Functions"
date = 2024-10-08
draft = true

[taxonomies]
tags = ["math"]

[extra]
math = true
disable_comments = true
toc = false
+++

A generating function is just a different way of writing a sequence of numbers. Here we will be dealing mainly with sequences of numbers $(a_n)$ which represent the number of objects of size $n$ for an enumeration problem. The interest of this notation is that certain natural operations on generating functions lead to powerful methods for dealing with recurrences on $a_n$.

***Theorem 1:*** Let $(a_n)_{n \geq 0}$ be a sequence of numbers. The generating function associated to this sequence is the series:

$$A(x) = \sum_{n \geq 0} a_n x^n .$$

Also if we consider a class $A$ of objects to be enumerated, we call generating function of this class the generating function

$$A(x) = \sum_{n \geq 0} a_n x^n ,$$

where $a_n$ is the number of objects of size $n$ in the class.

Note that the variable $x$ in generating functions doesn’t stand for anything but serves as a placeholder for keeping track of the coefficients of $x^n$.

**Example 1:** The generating function associated to the class of binary sequences (where the size of a sequence is its length) is $A(x) = \sum_{n \geq 0} 2^n x^n$ since there are $a_n = 2^n$ binary sequences of size $n$.

**Example 2:** Let $p$ be a positive integer. The generating function associated to the sequence $a_n = \binom{k}{n}$ for $n \leq k$ and $a_n = 0$ for $n > k$ is actually a polynomial:

$$A(x) = \sum_{n \geq 0} \binom{k}{n} x^n = (1 + x)^k .$$

Here the second equality uses the binomial theorem. Thus $A(x) = (1+x)^k$ is the generating function of the subsets of $\set{1, 2, \ldots, k}$ (where the size of a subset is its number of elements).

We see on this second example that the generating function has a very simple form. In fact, more simple than the sequence itself. This is the first magic of generating functions: in many natural instances the generating function turns out to be very simple.

Let us now modify this example in connection with probabilities. Suppose we have a coin having probability $p$ of landing on heads and a probability $q = 1 - p$ of landing on tails. We toss it $k$ times and denote by an the probability of getting exactly $n$ heads. What is the generating function of the sequence $(a_n)$? Well, it can be seen that $a_n = \binom{k}{n} q^{k-n} p^n$ thus the generating function is

$$A(x) = \sum_{n \geq 0} \binom{k}{n} q^{k-n} p^n x^n = (q + px)^k .$$

using the binomial theorem again.

Now, we observe that the generating function is

$$(q + px)(q + px)(q + px)\cdot\cdot\cdot(q + px) ,$$

which is just multiplying $k$ times the generating function $(q + px)$ corresponding to a single toss of the coin.

This is the second magic of generating functions: the generating function for complicated things can be obtained from the generating function for simple things. We will explain this in details, but first we consider an example.

***Theorem 2:*** Let $\mathcal{A}$ and $\mathcal{B}$ be classes of objects and let $A(x)$ and $B(x)$ be their generating functions. Then the class $\mathcal{C} = \mathcal{A} \times \mathcal{B}$ has generating function $C(x) = A(x)B(x)$.
