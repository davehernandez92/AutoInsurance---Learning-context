import { Fragment } from "react"
import { MAKES, YEARS, TYPES } from "../constants"

const Form = () => {
  return (
    <>

        <form>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Make
                </label>
                <select name="make" className="w-full p-3 bg-white border border-gray-200">
                    <option value="">-- Select Make --</option>

                    {MAKES.map(make => (
                        <option
                            key={make.id}
                            value={make.id}
                        > {make.name} </option>
                    ))}
                </select>
                 
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Year
                </label>
                <select name="make" className="w-full p-3 bg-white border border-gray-200">
                    <option value="">-- Select Year --</option>

                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        > {year} </option>
                    ))}
                </select>
                 
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Pick your coverage
                </label>
                <div className="flex gap-3 items-center">
                    {TYPES.map(type => (
                        <Fragment key={type.id}>
                            <label>
                                {type.name}
                            </label>
                            <input
                                type="radio"
                                name="type"
                                value={type.id}
                            />
                        </Fragment>
                    ))}
                </div>
                 
            </div>

            <input
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
            />
        </form>
    </>
  )
}

export default Form