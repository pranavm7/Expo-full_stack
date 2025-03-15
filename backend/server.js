const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

//Connecting to mongodb
mongoose.connect('mongodb://localhost:27017/reactnative')

// Define schemas
const ClientSchema = new mongoose.Schema({ name: String, email: String, password: String })
const ContactSchema = new mongoose.Schema({ message: String })
const Client = mongoose.model('Client', ClientSchema)
const Contact = mongoose.model('Contact', ContactSchema)

// API Routes
app.post('/register', async (req, res) => {
const client = new Client(req.body)
try{
    await client.save()
}
catch{
    console.log(`[!]ERROR\n${req.body}}`);
    res.status(500).json({message: 'Error registering client!' })
}
res.status(200).json({ message: 'Client registered successfully!' })
});

app.post('/contact', async (req, res) => {
const contact = new Contact(req.body)
try {
    await contact.save();
} catch{
    console.log(`[!]ERROR\n${req.body}}`);
    res.status(500).json({message: 'Error sending message!' })
}
res.status(200).json({ message: 'Message received!' })
})

// Start Backend Server
app.listen(5000, () => console.log('Server running on port 5000'))
