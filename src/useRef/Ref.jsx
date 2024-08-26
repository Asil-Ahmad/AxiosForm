import { useRef } from "react";

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    console.log(listNode);
    
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    console.log(imgNode);
    
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul className="flex flex-col gap-10" ref={listRef}>
          <li>
            <img src='https://picsum.photos/200/300' alt='Tom' />
          </li>
          <li>
            <img src='https://picsum.photos/200/300' alt='Maru' />
          </li>
          <li>
            <img src='https://picsum.photos/200/300' alt='Jellylorum' />
          </li>
        </ul>
      </div>
    </>
  );
}
