import {useScript} from '@uidotdev/usehooks';

export default function WeirdComponent() {
  console.log('WeirdComponent rendered'); // XXX test code
  useScript('https://code.jquery.com/jquery-1.12.4.min.js')
  return (
    <p>I am weird.</p>
  )
}
