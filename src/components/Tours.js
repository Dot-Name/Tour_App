import Card from "./Card";
function Tours({tours, btnHandler}){
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[3rem] m-[6vh] border-[7px] border-dashed border-[rgb(1,17,160)] px-[96px] py-[9px] rounded-[20px] font-poppins font-bold">Plan With Love</h2>
            </div>
            <div className="flex flex-wrap  justify-center max-w-[1300px] mx-auto my-0 ">
                {
                    tours.map((tour)=>{
                        return <Card key = {tour.id} {...tour} btnHandler={btnHandler}></Card>
                    })
                }
            </div>
        </div>
    )
}
export default Tours;