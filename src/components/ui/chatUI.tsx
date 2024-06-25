'use client'
import { CHAT_SVG } from '@/images/svgConstants';
interface ChatUIProps {

}

export default function ChatUI({}: ChatUIProps) {
  return (
    <div className='fixed sm:top-[82vh] right-[1vw] lg:top-[89vh] right-[5vw] cursor-pointer'>
      {CHAT_SVG({height:78, width:78})}
    </div>
  );
}
