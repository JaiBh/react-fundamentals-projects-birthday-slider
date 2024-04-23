import Person from "./Person";

const List = ({ list, order }) => {
  return (
    <>
      {list.map((item, index) => (
        <Person key={item.id} {...item} index={index} order={order}></Person>
      ))}
    </>
  );
};

export default List;
