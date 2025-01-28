// Add the relevant course descriptions
const courseDescriptions = {
    cs130: {
        title: "CS 130: Introduction to Programming",
        description: "Fundamentals of high-level programming language: object-orientation, methods, functions, variables, program control."
    },
    cs279: {
        title: "CS 279: Basic Information Security",
        description: "Provides an overview of information security planning. Evaluates security threats, regulations " +
            "and controls affecting various business types. Students select an industry that is specific to their career goals and consider the threats and controls appropriate for that industry."
    },
    cs231: {
        title: "CS 231: Discrete Mathematics",
        description: "Focused on mathematical reasoning, set theory, logic, proofs, relations, and combinatorics as applied to computer science."
    },
    cs241: {
        title: "CS 241: Computer Science I",
        description: "Introduces the fundamentals of software development; including software classes, objects, logic, selection control, " +
            "repetition control, subprograms, parameter passage, and rudimentary software engineering techniques."
    },
    cs309: {
        title: "CS 309: Probability and Statistics",
        description: "Covers elementary probability, random variables, properties of distributions, sampling, queuing theory, central limit theorem and law of large numbers."
    },
    cs220: {
        title: "CS 220: Client Web Programming",
        description: "Explains web client programming concepts, website authoring, dynamic web pages, object usage, events and event-driven programming, markup languages, document object model."
    },
    cs242: {
        title: "CS 242: Computer Science II",
        description: "Learned object-oriented programming concepts including inheritance and polymorphism; and recursion. " +
            "Introduces data structures including: lists, stacks, queues, trees and maps; advanced sorting; and searching algorithms."
    },
    cs245: {
        title: "CS 245: Assembly Language Programming",
        description: "Learned organization of computers, digital representation of data, symbolic coding and assembler systems, instructions, addressing modes, program segmentation and linkage, and applications."
    },
    cs322: {
        title: "CS 322: Server Web Programming",
        description: "Examines server-side programming concepts including server architectures, relational databases, and database connectivity; dynamic web pages; form processing; and web services."
    },
    cs324: {
        title: "CS 324: Mobile Development in iOS",
        description: "Examines existing tools, environments and programming languages for developing applications for mobile devices on the iOS platform." +
            " Explores current research on mobile applications and future trends."
    },
    cs340: {
        title: "CS 340: Data Structures/Algorithm Design",
        description: "Study of the design, implementation and analysis of computer algorithms; " +
            "time and space requirements for sorting, searching, graph theory, mathematics and string processing algorithms."
    },
    cs355: {
        title: "CS 355: Computer Architecture",
        description: "The design of computer systems and components. Processor design, control structures and" +
            " micro-programming; cache, memory hierarchies, mass memory, and memory management; buses, interrupts and I/O structures; multiprocessors and advanced processors."
    },
    cs380: {
        title: "CS 380: Database Management Systems",
        description: "Examines the relational model, database design, relational database query languages (such as relational algebra and SQL), " +
            "database normalization techniques, and physical database design."
    }
};


// Get modal elements
const modal = document.getElementById("course-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementsByClassName("close")[0];

// Open modal with course info when clicked
document.querySelectorAll(".course").forEach(course => {
    course.addEventListener("click", function() {
        const courseId = this.getAttribute("data-course");
        const courseInfo = courseDescriptions[courseId];

        if (courseInfo) {
            modalTitle.innerText = courseInfo.title;
            modalDescription.innerText = courseInfo.description;

            // Show the modal with animation
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add("show"); // Fade in the modal
                modal.querySelector(".modal-content").classList.add("show"); // Scale in the content
            }, 10);
        }
    });
});

// Close modal when user clicks on <span> (x)
closeModal.onclick = function() {
    modal.classList.remove("show");
    modal.querySelector(".modal-content").classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal after animation
    }, 300); // Wait for the animation to finish before hiding
}

// Close modal if user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal.onclick();
    }
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
}
// Function to animate timeline events on page load
document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    timelineEvents.forEach((event, index) => {
        setTimeout(() => {
            event.classList.add("visible");
        }, index * 300); // 300ms delay between each event animation
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const courseWorkSection = document.querySelector(".course-work");
    courseWorkSection.classList.add("fade-slide-in");
});


