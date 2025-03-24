// interface InputFieldProps {
//     label: string;
//     type: string;
//     value: string;
//     onChange: (value: string) => void;
//     error?: string;
//     placeholder?: string;
//   }
  
//   const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, error, placeholder }) => {
//     return (
//       <div className="mb-4">
//         <label className="block text-gray-700">{label}</label>
//         <input
//           type={type}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder={placeholder}
//         />
//         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//       </div>
//     );
//   };
  
//   export default InputField;
  