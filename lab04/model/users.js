const  mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Name is required'],
        maxLength: 255,
    },
    username:{
        type: String,
        required: [true, 'Username is required'],
        minimumLength:4
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
        validate: function(v) {
            var emailRegEx = /\S+@\S+\.\S+/
            return emailRegEx.test(v)
        },
        message: props => `${props.value} is not a valid email address!`
    },
    address:{
        street:{
            type: String,
            required: [true, 'Street is required'],
        },
        suite:{
            type: String,
            required: [true, 'Suite is required'],
        },
        city:{
            type: String,
            required: [true, 'City is required'],
            validate:function(v) {
                var cityregex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
                return cityregex.test(v)
            }
        },
        zipcode:{
            type: Number,
            required: [true, 'Zipcode is required'],
            validate:function(v) {
                var zipcoderegex = /^\d{5}(?:[-\s]\d{4})?$/
                return zipcoderegex.test(v)
            }  
        },
        geo:{
            lat:{
                type: Number,
                required: [true, 'Latitude is required']
            },
            lng:{
                type: Number,
                required: [true, 'Longitude is required']
            }
        }        
    },
    phone:{
        type: Number,
        required: [true, 'Phone is required'],
        validate:function(v) {
            var phoneRegEx = /^\d{3}-\d{3}-\d{4}$/
            return phoneRegEx.test(v)
        },
    msg: props => `${props.value} is not a valid phone number!`
    },

    website:{
        type: String,
        required: [true, 'Website is required']],
        validate:function(v) {
                var websiteRegEx = /^((http|https):\/\/)/
                return websiteRegEx.test(v)
            },
        msg: props => `${props.value} is not a valid website!`
    },

    company:{
        name:{
            type: String,
            required: [ true, 'Company name is required'],
        },
        catchPhrase:{
            type: String,
            maxLength: 255,
            required: [true, 'Catch phrase is required']],
        },
        bs:{
            type: String,
            required: [true, 'BS is required']],
        }
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User