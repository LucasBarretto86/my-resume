export const profile = require('../../profile.json')
profile.personal.age = () => {
    return [(new Date().getFullYear() - Number(this.profileData.bithday.year)), "anos"].join(" ")
}

profile.personal.fullAddress = () => {
    return Object.values(this.address).join(", ")
}

profile.personal.fullName = () => {
    return [this.profileData.name, this.profileData.surname].join(" ")
}

profile.personal.shortAddress = () => {
    return [this.address.city, this.address.zipcode, this.address.country].join(", ")
}