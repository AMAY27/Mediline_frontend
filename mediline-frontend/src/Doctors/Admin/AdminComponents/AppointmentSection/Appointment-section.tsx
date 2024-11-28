import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Navbar from '../../../Components/Navbar';
import { useAdminContext } from '../../Admin-context/AdminContext';
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";



interface AppointmentSectionProps{
    handleBack: () => void,
}

interface medication {
  name: string,
}

interface test {
  name: string,
}

const AppointmentSection: React.FC<AppointmentSectionProps> = ({handleBack}) => {
    const navigte = useNavigate();
    const { appointmentData } = useAdminContext();
    const [prescriptionType, setPrescriptionType] = useState<string>("medication");
    const [showMiniDiv, setShowMiniDiv] = useState(false);
    const miniDivRef = useRef<HTMLDivElement | null>(null);
    const [medicationList, setMedicationList] = useState<medication[]>([]);
    const [testList, setTestList] = useState<test[]>([]);
    const [medicationInput, setMedicationInput] = useState<medication>({
      name:"",
    });
    const [testInput, setTestInput] = useState<test>({
      name:""
    })


    const handleShowMinidiv = () => {
        setShowMiniDiv(!showMiniDiv);
    }

    const handleAddMedication = (e:FormEvent) => {
      e.preventDefault();
      const isAdded = medicationList.some(
        (medication) => medication.name === medicationInput.name
      );
      if(!isAdded){
        setMedicationList([...medicationList, medicationInput]);
        console.log(medicationList);
      }   
      else{
        alert("Medication already added")
      }
      setMedicationInput({name: ""});
    }

    const handleAddTest = (e:FormEvent) => {
      e.preventDefault();
      const isAdded = testList.some(
        (test) => test.name === testInput.name
      );
      if(!isAdded){
        setTestList([...testList, testInput]);
        console.log(testList);
      }   
      else{
        alert("Medication already added")
      }
      setTestInput({name: ""});
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, type:string) => {
      if(type==="medication"){
        setMedicationInput(p => ({...p, [e.target.name]: e.target.value}))
      }
      else{
        setTestInput(p => ({...p, [e.target.name]: e.target.value}))
      }
    }

    const handleDelete = (index:number, type:string) => {
      if(type === "medication"){
        setMedicationList((prev) => {
          const newList = [...prev]
          newList.splice(index,1)
          return newList
        })
      }else if(type === "diagnostic"){
        setTestList((prev) => {
          const newList = [...prev]
          newList.splice(index,1)
          return newList
        })
      }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (miniDivRef.current && !miniDivRef.current.contains(event.target as Node)) {
            setShowMiniDiv(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <>
      <div className='flex gap-4 h-svh'>
        <div className='w-[50%] border-b-[2px] border-gray-200 h-full'>
          <div
            className='border-gray-200 py-2 px-6'
          >
            <h2 className='text-2xl text-green-800'>{appointmentData.patient_details.name}</h2>
            <div className="flex justify-between items-center ">
              <div className="flex space-x-8 my-2">
                <div><span className='font-bold text-green-600'>Age:</span> {appointmentData.patient_details.age}</div>
                <div><span className='font-bold text-green-600'>Weight:</span> {appointmentData.patient_details.weight}</div>
              </div>
              <div className='relative' ref={miniDivRef}>
                <button 
                    className='flex items-center space-x-4 p-[6px] text-md rounded-md border-2 border-gray-200'
                    onClick={handleShowMinidiv}
                >
                        {prescriptionType === "medication" ? "Medication" : "Diagnostics"} <IoMdArrowDropdown/>
                </button>
                {showMiniDiv && 
                    <div 
                        className='absolute top-full right-0 border-2 border-gray-200 rounded-xl bg-white z-10 w-auto shadow-full py-4 rounded-md my-1'
                    >
                        <ul>
                            <li 
                                className='cursor-pointer hover:bg-green-100 px-4 py-2 flex items-center'
                                onClick={() => setPrescriptionType("medication")}
                            >
                                    {prescriptionType === "medication" ? <span className='mr-2'><IoMdCheckmark/></span> : <span className='text-transparent mr-2'><IoMdCheckmark/></span>} Medication
                            </li>
                            <li 
                                className='cursor-pointer hover:bg-green-100 px-4 py-2 flex items-center'
                                onClick={() => setPrescriptionType("diagnostics")}
                            >
                                    {prescriptionType === "diagnostics" ? <span className='mr-2'><IoMdCheckmark/></span> : <span className='text-transparent mr-2'><IoMdCheckmark/></span>} Diagnostics
                            </li>
                        </ul>
                    </div>
                }
              </div>
            </div>
          </div>
          <div className='bg-gray-100 rounded-xl ml-2 px-6 py-4'>
            {/* <div className='flex justify-end text-green-800 text-lg'>
              <h2 className='cursor-pointer' onClick={() => setPrescriptionType("")}>X</h2>
            </div> */}
            <h2 className='text-green-800 text-lg mb-2'>{prescriptionType === "medication" ? "Medication" : "Diagnostics"}</h2>
            <div className="flex space-x-2 items-center">
              <input
                className='rounded-md p-[4px] px-2 w-full bg-white border-2 border-gray-300'
                placeholder={prescriptionType === "medication" ? 'Enter or search for medication' : 'Enter or search for diagnostics'}
                name='name'
                onChange={(e) => handleChange(e, prescriptionType)}
                value={prescriptionType === "medication" ? medicationInput.name : testInput.name}
              />
              <button 
                className='py-[4px] px-2 font-bold text-md rounded-md bg-green-600 shadow-full text-white'
                onClick={prescriptionType === "medication" ? handleAddMedication : handleAddTest}
              >
                Add
              </button>
            </div>
          </div>
          <div className='flex'>
            <div className='w-[50%] py-2'>
              <h2 className='text-lg text-green-800 flex justify-center'>
                Medication
              </h2>
              {medicationList.map((medication, index) => (
                <div 
                  className='flex justify-between items-center border-2 border-gray-200 p-2 m-2 rounded-lg'
                  key={index}
                >
                  <h2 className="text-lg text-green-800">
                    {medication.name}
                  </h2>
                  <button
                    className='p-2'
                    onClick={() => handleDelete((index), "medication")}
                  >
                    delete
                  </button>
                </div>
              ))}
            </div>
            <div className='w-[50%] py-2'>
              <h2 className='text-lg text-green-800 flex justify-center'>
                Diagnostics
              </h2>
              {testList.map((test, index) => (
                <div 
                  className='flex justify-between items-center border-2 border-gray-200 p-2 m-2 rounded-lg'
                  key={index}
                >
                  <h2 className="text-lg text-green-800">
                    {test.name}
                  </h2>
                  <button
                    className='p-2'
                    onClick={() => handleDelete((index), "diagnostic")}
                  >
                    delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-[50%] border-b-[2px] border-l-[2px] border-gray-200 h-full flex'>
          <div className='h-100 flex items-center w-[2%]'>
            <LiaGripLinesVerticalSolid className='text-xl'/>
          </div>
          <div className='h-full w-[98%]'>
            <div className=' p-4 text-lg text-green-800 border-b-[2px] border-gray-200'>
              <h2>Medical History</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppointmentSection