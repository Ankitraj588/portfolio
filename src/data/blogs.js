export const blogs = [
  {
    id: 1,
    username: 'Ankit Raj',
    title: "Understanding Dijkstra's Algorithm",
    description:
      'A practical guide to understanding Dijkstra’s algorithm, its working, and implementation.',
    category: 'DSA',
    readTime: 5,
    views: '1.2K',
    likes: 128,
    comments: 24,
    date: '25 August 2026',
    content: `
Dijkstra's Algorithm is one of the most important algorithms for finding
the shortest path between vertices in a weighted graph.

It is widely used in routing, navigation systems, network optimization,
and many other real-world applications.

The main idea is simple: starting from a source node, we repeatedly
choose the unvisited node with the smallest known distance and relax
its neighbouring edges.

Why does this work?

If all edge weights are non-negative, once we select the node with the
smallest known distance, we know that there cannot be a shorter path
to that node through any other unvisited node.

The algorithm usually uses a priority queue to efficiently select
the node with the minimum distance.

Time Complexity:

Using an adjacency list and a min priority queue, the complexity is
approximately O((V + E) log V).

This makes Dijkstra's Algorithm very useful for large sparse graphs.
    `,
  },

  {
    id: 2,
    username: 'Ankit Raj',
    title: 'Understanding React Hooks',
    description:
      'A beginner-friendly explanation of useState, useEffect, and other important React hooks.',
    category: 'React',
    readTime: 4,
    views: '850',
    likes: 92,
    comments: 15,
    date: '23 August 2026',
    content: `
React Hooks allow functional components to use state and other React
features without writing class components.

The two most commonly used hooks are useState and useEffect.

useState allows us to store and update component state.

useEffect allows us to perform side effects such as API calls,
subscriptions, and interacting with external systems.

Understanding these two hooks gives you a strong foundation for
building modern React applications.
    `,
  },

  {
    id: 3,
    username: 'Ankit Raj',
    title: 'Getting Started with Django',
    description:
      'Understanding Django architecture and how it can be used to build powerful backend applications.',
    category: 'Django',
    readTime: 6,
    views: '720',
    likes: 76,
    comments: 12,
    date: '20 August 2026',
    content: `
Django is a powerful Python web framework designed for building
secure and scalable web applications.

It follows the Model Template View architecture and provides many
features out of the box.

Django's ORM makes it easy to work with databases without writing
SQL for every operation.

When combined with Django REST Framework, Django can also be used
to build APIs for React applications.
    `,
  },

  {
    id: 4,
    username: 'Ankit Raj',
    title: 'My Journey into Competitive Programming',
    description:
      'Lessons learned while solving DSA problems and preparing for coding interviews.',
    category: 'Career',
    readTime: 7,
    views: '1.5K',
    likes: 145,
    comments: 31,
    date: '18 August 2026',
    content: `
Competitive programming has taught me how to approach problems
systematically and think about time and space complexity.

The biggest lesson has been consistency.

Solving problems regularly helped me improve my understanding of
data structures, algorithms, and problem solving.
    `,
  },

  {
    id: 5,
    username: 'Ankit Raj',
    title: 'BFS vs DFS',
    description:
      'A simple comparison between Breadth First Search and Depth First Search with practical examples.',
    category: 'DSA',
    readTime: 5,
    views: '630',
    likes: 61,
    comments: 9,
    date: '15 August 2026',
    content: `
BFS and DFS are two fundamental graph traversal algorithms.

BFS explores nodes level by level and is commonly implemented using
a queue.

DFS explores as far as possible along one branch before backtracking
and is commonly implemented using recursion or a stack.

Choosing between them depends on the problem and the structure of
the graph.
    `,
  },
]