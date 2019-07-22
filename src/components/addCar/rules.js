const RULES = {
  posted: [
    { required: true, message: 'Please select a date', trigger: 'blur' },
  ],
  location: [
    { required: true, message: 'Please select a location', trigger: 'blur' },
  ],
  price: [
    { required: true, type: 'number', min: 10, max: 500,message: 'Please type a price', trigger: 'blur' },
  ]
}

export default RULES;