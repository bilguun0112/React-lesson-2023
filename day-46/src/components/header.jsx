export default function Header(props) {

    return (
        <div className="ui menu">
            <div className="right menu">
                <a className="item active">
                    <div className="ui simple dropdown item">
                        <i className="heart icon ">{props.wishlist.length}</i>
                        <div class="menu">
                            {props.wishlist.map((w, index) => {
                                return (
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="item"> {w.name} </div>
                                        <button class="ui icon button" onClick={() => {
                                            console.log('remove from wish list');
                                            props.setWishList(
                                                props.wishlist.filter(wish => wish.id !== w.id)
                                            )
                                        }}>
                                            <i class="close icon"></i>
                                        </button>
                                    </div>

                                );
                            })}
                        </div>
                    </div>
                </a>
                <a className="item"><i className="shopping basket icon"></i></a>
            </div>
        </div>
    )
}