export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("default"); // Default is light mode
  
    useEffect(() => {
      document.body.className = `theme--${theme}`;
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "default" ? "dark" : "default"));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  