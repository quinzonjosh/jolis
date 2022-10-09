
const Pagination = ({numPages}) => {
    //Note: Doesn't really work yet

    const pageNums = [];

    const changePage = (event) => {
        console.log(event.target.innerHTML);
    };

    for(let i = 0; i < numPages; i++)
    {
            pageNums.push(<a onClick={event => changePage(event)} key={i+1} className="hover:bg-gray-200 m-1">{i+1}</a>);
    }
  
    return (
    <p className="text-center">
        <a className="hover:bg-gray-200 mr-7">←PREV</a>
        {pageNums}
        <a className="hover:bg-gray-200 ml-7">NEXT→</a>
    </p>
  )
}

export default Pagination