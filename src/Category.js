export function Category() {

  const CategoryData = [
    {
      poster: "https://i.pinimg.com/originals/4d/21/44/4d21449ece798a2d95dfc6c399d9dec3.jpg",
      name: "Calculated Weather",
      description: " As much of information possible with the weather",
    },
    {
      poster: "https://img.freepik.com/free-vector/airplane-cartoon-sticker-white-background_1308-76926.jpg",
      name: "Best Flights",
      description: " Getting Cheap best flights",
    },
    {
      poster: "https://thumbs.dreamstime.com/z/microphone-conference-seminar-room-event-background-meeting-66497374.jpg",
      name: "Local events",
      description: " Getting good iternary based on the events",
    },
    {
      poster: "https://img.freepik.com/free-vector/airplane-cartoon-sticker-white-background_1308-76926.jpg",
      name: "Custoomization",
      description: " We deliver outsourced services for customers",
    },
  ];
  return (

    <div className=" MasterCatergory">

      <h3 style={{ color: "blue" }}> CATEGORY</h3>

      <h1> We offer Best services</h1>

      <div className="category">
        {CategoryData.map((item, index) => <div className="cbox">

          <img className="categoryposter" alt="poster" src={item.poster} />
          <p> {item.name} </p>
          <p> {item.description} </p>

        </div>

        )}



      </div>

    </div>



  );

}
