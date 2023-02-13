import useTheme from "../context/useTheme"

export default function Footer() {

    const { theme, setTheme } = useTheme()

    function handleSelectChange(e) {
        e.preventDefault()
        setTheme(e.target.value)
    }

    return (
        <div className="footer-container">
            <p>Footer</p>
            <select name="theme" id="" onChange={handleSelectChange} defaultValue={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="green">Green</option>
                <option value="brown">Brown</option>
            </select>
        </div>
    )
}