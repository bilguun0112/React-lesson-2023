import './App.css';
import Counter from './components.jsx/components';
import { useState } from 'react';


export default function Fancy() {
    const [isFancy, setIsFancy] = useState(false)
    return (
        <div className="App">
            <Counter isFancy={isFancy} />
            <label>
                <input type="checkbox" checked={isFancy} onChange={(e) => {
                    setIsFancy(e.target.checked);
                }} />
                Use fancy styling
            </label>
        </div>
    );
}