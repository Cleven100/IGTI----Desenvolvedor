import React from 'react'

export default function TextInput({
  labelDescription = 'Descrição do label', inputValue = ' valor padrão', onInputChange = null, 
})   {

    function handleInputChange({currentTarget}) {
      
      if (onInputChange) {
        const newValue = currentTarget.value;
        onInputChange(newValue);
      }
        
      
    }

    return (
        <div>

            <div className="flex flex-col my-4">
                <label className="text-sm mb-1" htmlFor="inputName">{labelDescription} </label>

                <input autoFocus id="inputName" className="border p-1" type="text"
                 value={inputValue}
                onChange={handleInputChange} />
            </div>
        </div>
    )
}
