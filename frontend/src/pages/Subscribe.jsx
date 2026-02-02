import { useState } from "react";
import axios from 'axios';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/subscribe/", { email }, {
                headers: { "Content-Type": "application/json" }
            });
            alert(response.data.message || "Subscribed Successfully!");
            setEmail('');
        } catch (error) {
            const mg = error?.response?.data?.message || "Subscription failed!";
            alert(mg);
        }
    };

    return (
        <section id="Subscribe" className="py-5 bg-light mt-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <h3 className="mb-3">Stay Updated</h3>
                        <p className="text-muted mb-4">Join our newsletter for the latest insights.</p>
                        
                        <form onSubmit={handleSubmit} className="input-group mb-3 shadow-sm">
                            <input 
                                value={email}
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="name@example.com"
                                aria-label="Recipient's email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="btn btn-primary px-4" type="submit">
                                Subscribe
                            </button>
                        </form>
                        
                        <small className="text-secondary">We value your privacy.</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;


