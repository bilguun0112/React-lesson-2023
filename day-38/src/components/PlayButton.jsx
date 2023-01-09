import Childbutton from "./ChildButton";

export default function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName} !`);
    }
    return (
    <Childbutton onClick={handlePlayClick}>Play {movieName}</Childbutton>
    )
}
