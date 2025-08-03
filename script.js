document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const roadmapData = [
        {
            phase: "Phase 0: The Foundation",
            topics: [
                {
                    name: "Core Concepts",
                    description: "The absolute non-negotiables before you start.",
                    subTopics: [
                        { name: "Pick a Language (C++/Java/Python)", link: "#", completed: false },
                        { name: "Master Time & Space Complexity (Big O)", link: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/", completed: false }
                    ]
                }
            ]
        },
        {
            phase: "Phase 1: The Building Blocks",
            topics: [
                {
                    name: "Arrays & Strings",
                    description: "Patterns: Two-Pointers, Sliding Window, Prefix Sum.",
                    subTopics: [
                        { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", completed: false },
                        { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", completed: false },
                        { name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", completed: false },
                        { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", completed: false }
                    ]
                },
                {
                    name: "Searching & Sorting",
                    description: "Patterns: Binary Search on Answer, Custom Sort.",
                    subTopics: [
                        { name: "Binary Search", link: "https://leetcode.com/problems/binary-search/", completed: false },
                        { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", completed: false },
                        { name: "Merge Sort (Concept)", link: "https://www.geeksforgeeks.org/merge-sort/", completed: false },
                        { name: "Quick Sort (Concept)", link: "https://www.geeksforgeeks.org/quick-sort/", completed: false }
                    ]
                },
                 {
                    name: "Linked Lists",
                    description: "Patterns: Fast & Slow Pointers, Reversal.",
                    subTopics: [
                        { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", completed: false },
                        { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", completed: false },
                        { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", completed: false },
                    ]
                },
                {
                    name: "Stacks & Queues",
                    description: "Patterns: Monotonic Stack, Using Queues for BFS.",
                     subTopics: [
                        { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", completed: false },
                        { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", completed: false },
                        { name: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", completed: false },
                    ]
                }
            ]
        },
        {
            phase: "Phase 2: The Core Structures",
            topics: [
                {
                    name: "Hashing (Hash Maps)",
                    description: "The key to optimizing brute-force solutions.",
                    subTopics: [
                        { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", completed: false },
                        { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", completed: false },
                        { name: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", completed: false },
                    ]
                },
                {
                    name: "Trees (Binary & BST)",
                    description: "Patterns: All 4 Traversals, Recursive approach.",
                    subTopics: [
                        { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", completed: false },
                        { name: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", completed: false },
                        { name: "Lowest Common Ancestor of a BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", completed: false },
                        { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", completed: false },
                    ]
                },
                {
                    name: "Heaps / Priority Queues",
                    description: "For any problem asking for 'k-th largest/smallest'.",
                    subTopics: [
                        { name: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", completed: false },
                        { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", completed: false },
                    ]
                },
                {
                    name: "Recursion & Backtracking",
                    description: "For 'generate all...' or 'find all possible...' problems.",
                    subTopics: [
                        { name: "Subsets", link: "https://leetcode.com/problems/subsets/", completed: false },
                        { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", completed: false },
                        { name: "Permutations", link: "https://leetcode.com/problems/permutations/", completed: false },
                    ]
                }
            ]
        },
        {
            phase: "Phase 3: The Advanced Tier",
             topics: [
                {
                    name: "Graphs (BFS, DFS)",
                    description: "Patterns: Adjacency List, Visited Set.",
                    subTopics: [
                        { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", completed: false },
                        { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", completed: false },
                        { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", completed: false },
                    ]
                },
                {
                    name: "Dynamic Programming (DP)",
                    description: "Patterns: Memoization, Tabulation, Optimal Substructure.",
                    subTopics: [
                        { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", completed: false },
                        { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", completed: false },
                        { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", completed: false },
                    ]
                }
            ]
        }
    ];

    const codingTips = [
        "When stuck on a problem for 15 minutes, step away and come back. A fresh perspective works wonders.",
        "Don't just solve a problem. Think about its time and space complexity. Can you do better?",
        "Explain a concept out loud to yourself or a rubber duck. It solidifies your understanding.",
        "Consistency over intensity. 1 hour of practice every day is better than 7 hours on a Sunday.",
        "Read the 'Discuss' section on LeetCode after solving a problem. You'll discover new, elegant solutions.",
        "Master the two-pointer technique. It's a simple pattern that solves many array and string problems efficiently.",
        "If you see a problem asking for the 'shortest path', think Breadth-First Search (BFS) first.",
        "For problems asking to 'generate all combinations/permutations', recursion and backtracking are your best friends."
    ];

    // --- DOM ELEMENTS ---
    const roadmapContainer = document.getElementById('roadmap-container');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const themeToggleButton = document.getElementById('theme-toggle');
    const tipTextElement = document.getElementById('tip-text');
    
    let currentRoadmap = [];

    // --- FUNCTIONS ---

    /**
     * Displays a random coding tip.
     */
    function displayCodingTip() {
        if (!tipTextElement) return;
        const randomIndex = Math.floor(Math.random() * codingTips.length);
        tipTextElement.textContent = codingTips[randomIndex];
    }

    /**
     * Renders the entire roadmap to the DOM based on the current data.
     */
    function renderRoadmap() {
        if (!roadmapContainer) return;
        roadmapContainer.innerHTML = '';
        currentRoadmap.forEach((phaseData, phaseIndex) => {
            const phaseEl = document.createElement('div');
            phaseEl.className = 'phase';

            const phaseHeaderEl = document.createElement('div');
            phaseHeaderEl.className = 'phase-header';
            phaseHeaderEl.innerHTML = `<h2>${phaseData.phase}</h2><span class="arrow">›</span>`;
            phaseHeaderEl.addEventListener('click', () => {
                phaseEl.classList.toggle('open');
                const content = phaseEl.querySelector('.phase-content');
                if (content && phaseEl.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else if (content) {
                    content.style.maxHeight = "0px";
                }
            });

            const phaseContentEl = document.createElement('div');
            phaseContentEl.className = 'phase-content';
            const topicListEl = document.createElement('ul');
            topicListEl.className = 'topic-list';

            if (phaseData.topics && Array.isArray(phaseData.topics)) {
                phaseData.topics.forEach((topicData, topicIndex) => {
                    const topicHeaderEl = document.createElement('div');
                    topicHeaderEl.className = 'topic-header';
                    // **FIX:** Check if description exists before adding it to the innerHTML
                    const descriptionHTML = topicData.description ? `<p>${topicData.description}</p>` : '';
                    topicHeaderEl.innerHTML = `<h3>${topicData.name}</h3>${descriptionHTML}`;
                    topicListEl.appendChild(topicHeaderEl);

                    if (topicData.subTopics && Array.isArray(topicData.subTopics)) {
                        topicData.subTopics.forEach((subTopic, subTopicIndex) => {
                            const topicItemEl = document.createElement('li');
                            topicItemEl.className = 'topic-item';
                            topicItemEl.style.setProperty('--i', subTopicIndex);
                            const isChecked = subTopic.completed ? 'checked' : '';
                            
                            topicItemEl.innerHTML = `
                                <label>
                                    <input type="checkbox" data-phase="${phaseIndex}" data-topic="${topicIndex}" data-subtopic="${subTopicIndex}" ${isChecked}>
                                    <span class="custom-checkbox">
                                        <span class="checkmark">✔</span>
                                    </span>
                                    <span class="topic-name">${subTopic.name}</span>
                                </label>
                                <a href="${subTopic.link}" target="_blank" class="topic-link">Practice</a>
                            `;
                            topicListEl.appendChild(topicItemEl);
                        });
                    }
                });
            }

            phaseContentEl.appendChild(topicListEl);
            phaseEl.appendChild(phaseHeaderEl);
            phaseEl.appendChild(phaseContentEl);
            roadmapContainer.appendChild(phaseEl);
        });
        updateProgress();
    }

    /**
     * Calculates and updates the overall progress bar and percentage text.
     */
    function updateProgress() {
        if (!progressBarFill || !progressPercentage) return;
        let completedSubTopics = 0;
        let totalSubTopics = 0;

        currentRoadmap.forEach(phase => {
            if (phase.topics && Array.isArray(phase.topics)) {
                phase.topics.forEach(topic => {
                    if (topic.subTopics && Array.isArray(topic.subTopics)) {
                        totalSubTopics += topic.subTopics.length;
                        topic.subTopics.forEach(subTopic => {
                            if (subTopic.completed) {
                                completedSubTopics++;
                            }
                        });
                    }
                });
            }
        });

        const percentage = totalSubTopics > 0 ? (completedSubTopics / totalSubTopics) * 100 : 0;
        
        progressBarFill.style.width = `${percentage}%`;
        progressPercentage.textContent = `${Math.round(percentage)}%`;
    }

    /**
     * Saves the current state of the roadmap to the browser's localStorage.
     */
    function saveProgress() {
        localStorage.setItem('dsaRoadmapProgress', JSON.stringify(currentRoadmap));
    }

    /**
     * Loads progress from localStorage. If no saved data is found, it initializes with the default roadmap.
     */
    function loadProgress() {
        try {
            const savedProgress = localStorage.getItem('dsaRoadmapProgress');
            if (savedProgress) {
                const parsedData = JSON.parse(savedProgress);
                if (Array.isArray(parsedData)) {
                    currentRoadmap = parsedData;
                    return;
                }
            }
        } catch (error) {
            console.error("Failed to parse saved progress, resetting.", error);
        }
        
        currentRoadmap = JSON.parse(JSON.stringify(roadmapData));
    }

    /**
     * Toggles the theme and saves the preference.
     */
    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    }

    /**
     * Loads the saved theme from localStorage.
     */
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        }
    }

    // --- EVENT LISTENERS ---
    
    if (roadmapContainer) {
        roadmapContainer.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const phaseIndex = e.target.dataset.phase;
                const topicIndex = e.target.dataset.topic;
                const subTopicIndex = e.target.dataset.subtopic;
                
                if (phaseIndex !== undefined && topicIndex !== undefined && subTopicIndex !== undefined) {
                    currentRoadmap[phaseIndex].topics[topicIndex].subTopics[subTopicIndex].completed = e.target.checked;
                    
                    const listItem = e.target.closest('.topic-item');
                    if (e.target.checked && listItem) {
                        listItem.classList.add('checked-animation');
                        setTimeout(() => {
                            listItem.classList.remove('checked-animation');
                        }, 300);
                    }

                    updateProgress();
                    saveProgress();
                }
            }
        });
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // --- INITIALIZATION ---
    loadTheme();
    loadProgress();
    displayCodingTip();
    renderRoadmap();
});
