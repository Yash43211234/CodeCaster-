import { useState } from 'react';

export default function FutureGernerator3000() {
  const predictions = [
    "📸 You’ll go viral… for tripping over nothing. Twice.",
    "🛸 Aliens will abduct you, realize you're not worth it, and return you immediately.",
    "💸 You’ll make millions… of mistakes.",
    "🐶 Your dog will start talking — just to insult your life choices.",
    "🕰️ You’ll time travel to stop a disaster… and cause a bigger one.",
    "🍦 You’ll invent ice cream that screams when it melts. Congrats?",
    "🪞Your mirror will start giving unsolicited fashion advice. It’s not good.",
    "👀 The government isn’t watching you — but your mom is. And she’s disappointed.",
    "🧟 You’ll land a zombie movie role because they thought you were method acting.",
    "📱 Your phone will autocorrect 'hi' to 'I hate you' in a job interview.",
    "🤖 ChatGPT will replace your job and roast you on the way out.",
    "🍕 You’ll eat a pizza so good it becomes your entire personality.",
    "🐸 You’ll wake up as a frog. People still swipe left.",
    "📞 You’ll get a call from your ex… just to say ‘oops, wrong number’.",
    "💀 You’ll be haunted by a ghost. It’s just as lazy as you are.",
    "🎩 A magician will saw you in half. One half gets better friends.",
    "🚽 You'll drop your phone in the toilet and try to blame your cat.",
    "🏆 You’ll win an award for ‘Most Awkward Human 2025’. It’s not even close.",
    "💡 You’ll have a million-dollar idea. Someone else will make it first.",
    "🚀 You’ll go to space… in a dream… and still mess it up."
  ];

  const [prediction, setPrediction] = useState("");
  const [shake, setShake] = useState(false);

  const generatePrediction = () => {
    const random = predictions[Math.floor(Math.random() * predictions.length)];
    setShake(true);
    setTimeout(() => {
      setPrediction(random);
      setShake(false);
    }, 1000);
  };

  return (
    <div className={`crazy-container ${shake ? 'shake' : ''}`}>
      <h1 className="title">🔮 Future Generator 3000</h1>
      <button className="crazy-button" onClick={generatePrediction}>
        Tell My Future
      </button>
      {prediction && <p className="crazy-prediction">{prediction}</p>}

      <style>{`
        body {
          background-color: #0d0d0d;
        }

        .crazy-container {
          font-family: 'Courier New', monospace;
          background: linear-gradient(135deg, #1a1a1a, #111);
          padding: 60px 20px;
          border-radius: 20px;
          margin: 50px auto;
          max-width: 700px;
          color: #00ffea;
          text-align: center;
          box-shadow: 0 0 30px #0ff;
          transition: transform 0.3s ease;
        }

        .title {
          font-size: 32px;
          color: #ff00c8;
          text-shadow: 0 0 10px #ff00c8;
          margin-bottom: 20px;
        }

        .crazy-button {
          background: #ff00c8;
          color: black;
          padding: 15px 30px;
          border: none;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px #ff00c8;
        }

        .crazy-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px #ff00c8, 0 0 10px #00ffea;
        }

        .crazy-prediction {
          margin-top: 40px;
          font-size: 24px;
          padding: 20px;
          background: rgba(0, 255, 234, 0.1);
          border: 2px dashed #00ffea;
          border-radius: 15px;
          color: #00ffea;
          animation: glitch 0.8s infinite alternate;
        }

        @keyframes glitch {
          0% { transform: skew(0deg); text-shadow: 2px 2px #ff00c8; }
          50% { transform: skew(1deg); text-shadow: -2px -2px #ff00c8; }
          100% { transform: skew(0deg); text-shadow: 2px -2px #ff00c8; }
        }

        .shake {
          animation: shake 1s;
        }

        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}
