
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[50vh] border">


                <div className="flex justify-center items-center  mt-10">
                    <h1 className="text-4xl w-2/3 flex justify-center items-center my-auto font-bold ">I Grow By Helping People In Need</h1>


                </div>
                <div className="mt-8 flex justify-center">
                    <input className="border w-56 p-2  rounded " type="text" name="" id="" placeholder="Search here...." />
                    <button className=" btn w-20 font-bold bg-rose-600  rounded text-white">Search</button>
                </div>
            </div>


        </div>

    );
};

export default Banner;