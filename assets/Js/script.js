 // Theme toggle functionality
        class ThemeToggle {
            constructor() {
                this.toggle = document.getElementById('themeToggle');
                this.indicator = document.getElementById('themeIndicator');
                this.currentTheme = this.getStoredTheme() || 'light';
                
                this.init();
            }

            init() {
                // Set initial theme
                this.setTheme(this.currentTheme);
                
                // Add event listener
                this.toggle.addEventListener('click', () => this.switchTheme());
                
                // Add keyboard support
                this.toggle.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.switchTheme();
                    }
                });

                // Make toggle focusable
                this.toggle.setAttribute('tabindex', '0');
            }

            switchTheme() {
                this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(this.currentTheme);
                this.storeTheme(this.currentTheme);
            }

            setTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                this.updateIndicator(theme);
                
                // Add a subtle animation to the body
                document.body.style.animation = 'none';
                document.body.offsetHeight; // Trigger reflow
                document.body.style.animation = 'fadeIn 0.3s ease-in';
            }

            updateIndicator(theme) {
                this.indicator.textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';
            }

            storeTheme(theme) {
                try {
                    // Note: localStorage is not available in Claude.ai artifacts
                    // In a real implementation, this would work:
                    // localStorage.setItem('night-owl-theme', theme);
                    
                    // For demo purposes, we'll store in a variable
                    window.storedTheme = theme;
                } catch (error) {
                    console.warn('Unable to store theme preference');
                }
            }

            getStoredTheme() {
                try {
                    // Note: localStorage is not available in Claude.ai artifacts
                    // In a real implementation, this would work:
                    // return localStorage.getItem('night-owl-theme');
                    
                    // For demo purposes, check if we have a stored theme
                    return window.storedTheme || null;
                } catch (error) {
                    return null;
                }
            }
        }

        // Initialize theme toggle when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new ThemeToggle();
        });

        // Prevent flash of unstyled content
        document.documentElement.style.visibility = 'visible';