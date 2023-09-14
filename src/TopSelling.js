export function TopSelling() {

    const TopSellingData = [
      {
        poster: "https://thumbs.dreamstime.com/b/rome-italy-colosseum-coliseum-sunrise-144201572.jpg",
        name: "Rome, Italy",
        description: " 10 Days Trip",
      },
      {
        poster: "https://thumbs.dreamstime.com/b/london-big-ben-houses-parliament-uk-49652572.jpg",
        name: "London, UK",
        description: " 12 Days Trip",
      },
      {
        poster: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?cs=srgb&dl=pexels-jimmy-teoh-1010657.jpg&fm=jpg",
        name: "Full Europe",
        description: " 28 Days Trip",
      },
     
    ];
    return (
  
      <div className=" MasterCatergory">
  
        <h3 style={{ color: "blue" }}> TopSelling</h3>
  
        <h1> Top Destinations</h1>
  
        <div className="Topselling">
          {TopSellingData.map((item, index) => <div className="tbox" >
  
            <img className="TopSellingposter" alt="poster" src={item.poster} />
            <p> {item.name} </p>
            <p> {item.description} </p>
  
          </div>
  
          )}
  
  
  
        </div>
  
      </div>
  
  
  
    );
  
  }
//   https://media.timeout.com/images/105237852/750/562/image.jpg