```javascript
const synth = window.speechSynthesis;

const synthesizeSpeech = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  synth.speak(utterance);
};

export default synthesizeSpeech;
```