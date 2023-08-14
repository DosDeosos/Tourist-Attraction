function travellocation(prop) {
  const substring = (string) => {
    return string.length > 100 ? string.substring(0, 100) + "..." : string;
  };
  const subimage = () => {
    const images = prop.traveldata.photos;
    return images.length > 1 ? images.slice(1) : [];
  };
  console.log(prop);
  return (
    <div className="flex m-[20px] flex-col md:flex-row">
      <div className=" flex mx-5 justify-center">
        <img
          className="rounded-[10px] w-[300px] "
          src={prop.traveldata.photos[0]}
        />
      </div>
      <div className=" text-gray-500 text-[12px] flex flex-col-reverse md:flex-col mx-5">
        <div>
          <div className="text-[18px] text-black">{prop.traveldata.title}</div>
          <div>{substring(prop.traveldata.description)}</div>
          <div>
            <a
              href={prop.traveldata.url}
              target="_blank"
              className="underline text-blue-500"
            >
              อ่านต่อ
            </a>
          </div>
          <div>
            หมวด
            {prop.traveldata.tags.map((tag, index, all) => {
              return (
                <span key={index}>
                  {all.length == index + 1 ? "และ" : ""}
                  <span
                    className="underline mx-1 cursor-pointer"
                    onClick={() => prop.onclicktag(tag)}
                  >
                    {tag}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            {subimage().map((url, index) => {
              return (
                <img
                  key={index}
                  src={url}
                  className="w-[50px] mr-[10px] mt-[10px] aspect-square object-cover rounded-[5px]"
                />
              );
            })}
          </div>
          <div>
            <img
              onClick={() => {
                navigator.clipboard.writeText(prop.traveldata.url);
                alert("You just copied!");
              }}
              className="w-[20px] cursor-pointer"
              src="https://assets.materialup.com/uploads/01f79977-8698-420f-9743-60d28e4dff90/Qt4-kSaouyu7940hJqYNAlpUNhFwIwKGXXQSozorK5axygTBTqKMw1cw8xlQLNfNgWg=w300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default travellocation;
