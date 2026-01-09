let currentPolicy = 'privacy';

// Policy Tab Navigation
function showPolicy(policyType) {
    currentPolicy = policyType;

    // Update tabs
    document.querySelectorAll('.policy-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update content
    document.querySelectorAll('.policy-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${policyType}-policy`).classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}