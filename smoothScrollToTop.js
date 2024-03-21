function smoothScrollToTop() {
    const scrollDuration = 1000; // Duration of the scroll animation in milliseconds

    // Function to perform the scroll animation
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    // Start the animation
    scrollToTop();
}

// Example usage:
smoothScrollToTop()
//  when you want to scroll to the top smoothly
