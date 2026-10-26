import useAxios from "./UseAxios";
function TestUseAxios() {
  const [data] = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      {data && data.map((item) => {
        return (
          <p key={item.id}>{item.email}</p>
        );
      })}
    </>
  );
}
export default TestUseAxios;
