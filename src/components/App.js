import React, {useEffect, useState} from 'react'
import ReactMarkdowm from 'react-markdown'

const App = () => {
    const [markdown, setMarkdown] = useState('Hello World # Heading')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

  return (
    <div className='app'>
        {loading ? (
            <div className='loading'>Loading...</div>
        ) : (
            <div className='container'>
                <textarea 
                    className='textarea'
                    value={markdown}
                    onChange={handleChange}
                    placeholder='Write your markdown here...'
                />
                <div className='preview'>
                    <h1>Heading</h1>
                    <ReactMarkdowm>{markdown}</ReactMarkdowm>
                </div>
            </div>
        )}
    </div>
  )
}

export default App

