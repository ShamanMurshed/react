import EditEmployee from "./EditEmployee";

function Employee(props) {
    return (
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <h2 className="text-lg text-black font-semibold">
                        {props.firstName} <br /> {props.lastName}
                    </h2>
                    <p className="text-slate-500 font-medium text-md">
                        {props.position ? `${props.position}` : 'Position not available'}
                        <br/>
                        {props.rating ? `Rating: ${props.rating}` : 'Rating not available'}
                    </p>
                </div>

                <EditEmployee firstName={props.firstName} lastName={props.lastName} />
            </div>
        </div>
    );
}

export default Employee;
