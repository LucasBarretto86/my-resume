export const Formatter = {
    age(birthday) {
        return this.filteredJoin([(new Date().getFullYear() - Number(birthday.year)), "anos"], " ")
    },

    fullAddress(address) {
        return this.filteredJoin(Object.values(address), ", ")
    },

    fullName(personal) {
        return this.filteredJoin([personal.name, personal.surname], " ")
    },

    shortAddress(address) {
        return this.filteredJoin([address.city, address.zipcode, address.country], ", ")
    },

    phone(phone) {
        return this.filteredJoin([phone.international, phone.code, phone.number], "-")
    },

    filteredJoin(arr, separator) {
        return arr.filter(data => data !== "").join(separator)
    }
}