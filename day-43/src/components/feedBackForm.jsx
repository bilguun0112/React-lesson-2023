
import { useState } from 'react';

function FeedBackForm() {

  const [text, setText] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSend, setIsSend] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true)
    await sendMessage(text)
    setIsSending(false)
    setIsSend(true)

  }

    if(isSend){
      return <h1> Thanks for feedback</h1>
    }


  function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    })
  }


  return (
    <div className="App">
      <h1> Та текстээ оруулна уу ? </h1>
      <form action="" style={{ float: "left" }} onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <textarea name="" type="text" value={text} id="" cols="30" rows="10" disabled={isSending} onChange={e => {setText(e.target.value)}}>

        </textarea>
        <br />
        <button>
          Send
        </button>
        {isSending && <p>Sending ....</p>}
      </form>
    </div>
  );
}

export default FeedBackForm;
