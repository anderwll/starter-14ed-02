console.log("Hello Word !!");

const data = [{product_name: '', ...}, {product_name: '', ...}, {product_name: '', ...}];

app.get('/received', (req, res) => {
    res.status(200).json({success: true, message: "Ok", data})
})