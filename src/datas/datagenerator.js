export const datagen = [
  "{{repeat(1, 1)}}",
  {
    firstName: "{{firstName()}}",
    lastName: "{{surname()}}",
    dateOfBirth: '{{date(new Date(1980,0,1),new Date(), "dd/MM/YYYY")}}',
    startDate: '{{date(new Date(2000,0,1),new Date(), "dd/MM/YYYY")}}',
    department: function () {
      var departments = [
        "Sales",
        "Marketing",
        "Engineering",
        "Human Resources",
        "Legal",
      ]
      return departments[Math.floor(Math.random() * departments.length - 1)]
    },
    street: "{{integer(100, 999)}} {{street()}}",
    city: "{{city()}}",
    state: "{{state()}}",
    zipCode: "{{integer(100, 10000)}}",
  },
]
