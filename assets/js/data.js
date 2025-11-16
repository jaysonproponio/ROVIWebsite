// ROVI Fashion Website - Data Management

// Initialize data structure
const initializeData = () => {
    if (!localStorage.getItem('rovi_products')) {
        const sampleProducts = [
            {
                id: 1,
                name: "Elegant Evening Dress",
                price: 299.99,
                image: "../assets/images/ElegantEveningDress.jpg",
                category: "Dresses",
                description: "A stunning evening dress perfect for special occasions.",
                inStock: true
            },
            {
                id: 2,
                name: "Classic Blazer",
                price: 199.99,
                image: "../assets/images/ClassicBlazer.jpg",
                category: "Jackets",
                description: "Timeless blazer for professional and casual wear.",
                inStock: true
            },
            {
                id: 3,
                name: "Designer Handbag",
                price: 399.99,
                image: "../assets/images/DesignerHandbag.jpg",
                category: "Accessories",
                description: "Luxury handbag crafted from premium materials.",
                inStock: true
            },
            {
                id: 4,
                name: "Silk Scarf",
                price: 89.99,
                image: "../assets/images/SilkScarf.jpg",
                category: "Accessories",
                description: "Elegant silk scarf with unique patterns.",
                inStock: true
            },
            {
                id: 5,
                name: "High-Waisted Trousers",
                price: 149.99,
                image: "../assets/images/HighWaistedTrouser.jpg",
                category: "Pants",
                description: "Comfortable and stylish high-waisted trousers.",
                inStock: true
            },
            {
                id: 6,
                name: "Cashmere Sweater",
                price: 249.99,
                image: "../assets/images/CashmereSweater.jpg",
                category: "Tops",
                description: "Luxurious cashmere sweater for ultimate comfort.",
                inStock: true
            }
        ];
        localStorage.setItem('rovi_products', JSON.stringify(sampleProducts));
    }

    if (!localStorage.getItem('rovi_orders')) {
        localStorage.setItem('rovi_orders', JSON.stringify([]));
    }

    if (!localStorage.getItem('rovi_cart')) {
        localStorage.setItem('rovi_cart', JSON.stringify([]));
    }

    if (!localStorage.getItem('rovi_content')) {
        const defaultContent = {
            heroImage: "../photos/heronobg.png",
            heroTitle: "Discover & Find Your Own Fashion",
            heroDescription: "We have a lot of awesome collections from various top brands and experience fashion designer around the world.",
            aboutText: "ROVI is a premier fashion destination that brings together the finest collections from top designers around the world.",
            brands: ["LOUIS VUITTON", "GUCCI", "ZARA", "DIOR"]
        };
        localStorage.setItem('rovi_content', JSON.stringify(defaultContent));
    }

    if (!localStorage.getItem('rovi_showcase')) {
        const defaultShowcase = [
            {
                id: 1,
                type: 'lookbook',
                title: 'Spring Collection Lookbook',
                image: '../assets/images/SpringCollectionLogbook.jpg',
                description: 'Explore our latest spring fashion trends'
            },
            {
                id: 2,
                type: 'runway',
                title: 'Fashion Week 2025',
                image: '../assets/images/FashionWeek2025.jpg',
                description: 'Highlights from our runway show'
            },
            {
                id: 3,
                type: 'behind-scenes',
                title: 'Behind the Scenes',
                image: '../assets/images/BehindTheScenes.jpg',
                description: 'See how we create our collections'
            },
            {
                id: 4,
                type: 'lookbook',
                title: 'Summer Essentials',
                image: '../assets/images/SummerEssentials.jpg',
                description: 'Must-have pieces for summer'
            }
        ];
        localStorage.setItem('rovi_showcase', JSON.stringify(defaultShowcase));
    }

    if (!localStorage.getItem('rovi_designers')) {
        const defaultDesigners = {
            1: {
                name: "Kem Seracosa",
                title: "Haute Couture Designer",
                image: "../assets/images/Seracosa.jpg",
                bio: "Kem Seracosa is a renowned fashion designer with over 15 years of experience in haute couture. Her elegant evening wear and sophisticated designs have graced red carpets and fashion weeks around the world. Kem's signature style combines timeless elegance with modern sophistication, creating pieces that are both classic and contemporary.",
                achievements: [
                    "Featured in Vogue, Elle, and Harper's Bazaar",
                    "Winner of the International Fashion Design Award 2023",
                    "Designer of the Year - Fashion Week Paris 2022",
                    "Collections showcased in New York, Paris, and Milan Fashion Weeks"
                ],
                collections: "Evening Wear, Bridal, Formal Attire"
            },
            2: {
                name: "Armielyn Olarte",
                title: "Streetwear & Contemporary Designer",
                image: "../assets/images/Olarte.jpg",
                bio: "Armielyn Olarte is an innovative streetwear designer known for blending modern aesthetics with classic elements. Her bold designs challenge traditional fashion norms while maintaining wearability and style. Armielyn's work has been featured in major fashion weeks and has gained a cult following among fashion-forward individuals.",
                achievements: [
                    "Featured in GQ, Complex, and Highsnobiety",
                    "Collaboration with major streetwear brands",
                    "Designer of the Year - Streetwear Awards 2024",
                    "Collections showcased in Tokyo, London, and New York Fashion Weeks"
                ],
                collections: "Streetwear, Casual, Contemporary"
            },
            3: {
                name: "Nicole Mapinogos",
                title: "Sustainable Fashion Designer",
                image: "../assets/images/Mapinogos.jpg",
                bio: "Nicole Mapinogos is a sustainable fashion advocate specializing in eco-friendly materials and ethical production practices. Her collections prove that fashion can be both beautiful and responsible. Nicole's commitment to sustainability has earned her recognition in the fashion industry and beyond.",
                achievements: [
                    "Winner of the Sustainable Fashion Award 2023",
                    "Featured in Eco Fashion Week",
                    "Certified by Global Organic Textile Standard",
                    "Collections featured in Vogue Sustainability Issue"
                ],
                collections: "Sustainable Fashion, Eco-Friendly, Ethical"
            },
            4: {
                name: "Trexie Silvosa",
                title: "Contemporary Fashion Designer",
                image: "../assets/images/Silvosa.jpg",
                bio: "Trexie Silvosa is a contemporary fashion designer known for bold patterns and innovative silhouettes. Her work seamlessly blends artistic expression with wearable fashion, creating unique pieces that stand out. Trexie's designs have been featured in international fashion magazines and worn by celebrities on red carpets worldwide.",
                achievements: [
                    "Featured in Vogue, W Magazine, and InStyle",
                    "Winner of the Emerging Designer Award 2024",
                    "Collections showcased in London and New York Fashion Weeks",
                    "Collaboration with international fashion houses"
                ],
                collections: "Contemporary, Avant-Garde, Ready-to-Wear"
            }
        };
        localStorage.setItem('rovi_designers', JSON.stringify(defaultDesigners));
    }
};

// Product Management
const getProducts = () => {
    return JSON.parse(localStorage.getItem('rovi_products') || '[]');
};

const saveProducts = (products) => {
    localStorage.setItem('rovi_products', JSON.stringify(products));
};

const addProduct = (product) => {
    const products = getProducts();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    product.id = newId;
    products.push(product);
    saveProducts(products);
    return product;
};

const updateProduct = (id, updatedProduct) => {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct, id };
        saveProducts(products);
        return products[index];
    }
    return null;
};

const deleteProduct = (id) => {
    const products = getProducts();
    const filtered = products.filter(p => p.id !== id);
    saveProducts(filtered);
    return filtered;
};

const getProductById = (id) => {
    const products = getProducts();
    return products.find(p => p.id === parseInt(id));
};

// Cart Management
const getCart = () => {
    return JSON.parse(localStorage.getItem('rovi_cart') || '[]');
};

const saveCart = (cart) => {
    localStorage.setItem('rovi_cart', JSON.stringify(cart));
    updateAllBadges();
};

const addToCart = (productId, quantity = 1, size = null) => {
    const cart = getCart();
    const product = getProductById(productId);
    
    if (!product) return false;

    // Check if product with same size already exists
    const existingItem = cart.find(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            size: size,
            product: product
        });
    }
    
    saveCart(cart);
    return true;
};

const removeFromCart = (productId, size = null) => {
    const cart = getCart();
    const filtered = cart.filter(item => 
        !(item.productId === productId && (size === null || item.size === size))
    );
    saveCart(filtered);
};

const updateCartQuantity = (productId, quantity, size = null) => {
    const cart = getCart();
    const item = cart.find(item => 
        item.productId === productId && (size === null || item.size === size)
    );
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
};

const clearCart = () => {
    saveCart([]);
};

const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
};

const updateCartBadge = () => {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
};

const updateOrderBadge = () => {
    const orders = getOrders();
    // Only count pending orders that haven't been viewed
    const viewedOrders = JSON.parse(localStorage.getItem('rovi_viewed_orders') || '[]');
    const pendingOrders = orders.filter(o => 
        o.status === 'pending' && !viewedOrders.includes(o.id)
    ).length;
    const badges = document.querySelectorAll('.order-badge');
    badges.forEach(badge => {
        badge.textContent = pendingOrders;
        badge.style.display = pendingOrders > 0 ? 'inline-block' : 'none';
    });
};

const markOrdersAsViewed = () => {
    const orders = getOrders();
    const pendingOrderIds = orders.filter(o => o.status === 'pending').map(o => o.id);
    if (pendingOrderIds.length > 0) {
        const viewedOrders = JSON.parse(localStorage.getItem('rovi_viewed_orders') || '[]');
        pendingOrderIds.forEach(id => {
            if (!viewedOrders.includes(id)) {
                viewedOrders.push(id);
            }
        });
        localStorage.setItem('rovi_viewed_orders', JSON.stringify(viewedOrders));
        updateOrderBadge();
    }
};

const updateWishlistBadge = () => {
    const wishlist = JSON.parse(localStorage.getItem('rovi_wishlist') || '[]');
    const wishlistCount = wishlist.length;
    const badges = document.querySelectorAll('.wishlist-badge');
    badges.forEach(badge => {
        badge.textContent = wishlistCount;
        badge.style.display = wishlistCount > 0 ? 'inline-block' : 'none';
    });
};

const updateAllBadges = () => {
    updateCartBadge();
    updateOrderBadge();
    updateWishlistBadge();
};

// Order Management
const getOrders = () => {
    return JSON.parse(localStorage.getItem('rovi_orders') || '[]');
};

const saveOrders = (orders) => {
    localStorage.setItem('rovi_orders', JSON.stringify(orders));
    // Dispatch custom event for same-tab updates
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('ordersUpdated'));
        updateOrderBadge();
    }
};

const createOrder = (orderData) => {
    const orders = getOrders();
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    const order = {
        id: newId,
        ...orderData,
        status: 'pending',
        date: new Date().toISOString()
    };
    orders.push(order);
    saveOrders(orders);
    return order;
};

const updateOrderStatus = (orderId, status) => {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        saveOrders(orders);
        return order;
    }
    return null;
};

const updateOrderStatusById = (orderId, status) => {
    return updateOrderStatus(parseInt(orderId), status);
};

// Content Management
const getContent = () => {
    return JSON.parse(localStorage.getItem('rovi_content') || '{}');
};

const saveContent = (content) => {
    localStorage.setItem('rovi_content', JSON.stringify(content));
};

const updateContent = (updates) => {
    const content = getContent();
    const updated = { ...content, ...updates };
    saveContent(updated);
    return updated;
};

// Analytics
// Designer Management
const getDesigners = () => {
    return JSON.parse(localStorage.getItem('rovi_designers') || '{}');
};

const saveDesigners = (designers) => {
    localStorage.setItem('rovi_designers', JSON.stringify(designers));
};

const getDesignerById = (id) => {
    const designers = getDesigners();
    return designers[id] || null;
};

const addDesigner = (designer) => {
    const designers = getDesigners();
    const newId = Object.keys(designers).length > 0 ? Math.max(...Object.keys(designers).map(Number)) + 1 : 1;
    designers[newId] = { ...designer, id: newId };
    saveDesigners(designers);
    return designers[newId];
};

const updateDesigner = (id, designerData) => {
    const designers = getDesigners();
    if (designers[id]) {
        designers[id] = { ...designers[id], ...designerData };
        saveDesigners(designers);
        return designers[id];
    }
    return null;
};

const deleteDesigner = (id) => {
    const designers = getDesigners();
    if (designers[id]) {
        delete designers[id];
        saveDesigners(designers);
        return true;
    }
    return false;
};

const getAnalytics = () => {
    const orders = getOrders();
    const products = getProducts();
    const totalRevenue = orders.reduce((sum, order) => {
        if (order.status === 'completed') {
            return sum + (order.total || 0);
        }
        return sum;
    }, 0);

    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    const completedOrders = orders.filter(o => o.status === 'completed').length;
    const totalProducts = products.length;

    // Sales by month (last 6 months)
    const salesByMonth = {};
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthKey = date.toLocaleString('default', { month: 'short', year: 'numeric' });
        salesByMonth[monthKey] = 0;
    }

    orders.forEach(order => {
        if (order.status === 'completed' && order.date) {
            const orderDate = new Date(order.date);
            const monthKey = orderDate.toLocaleString('default', { month: 'short', year: 'numeric' });
            if (salesByMonth.hasOwnProperty(monthKey)) {
                salesByMonth[monthKey] += (order.total || 0);
            }
        }
    });

    return {
        totalRevenue,
        totalOrders,    
        pendingOrders,
        completedOrders,
        totalProducts,
        salesByMonth
    };
};

// Authentication Management
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('rovi_current_user') || 'null');
};

const setCurrentUser = (user) => {
    if (user) {
        localStorage.setItem('rovi_current_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('rovi_current_user');
    }
};

const logout = () => {
    setCurrentUser(null);
    // Determine if we're in admin or user folder
    const path = window.location.pathname;
    if (path.includes('/admin/')) {
        window.location.href = '../user/login.html';
    } else {
        window.location.href = 'login.html';
    }
};

const isAuthenticated = () => {
    return getCurrentUser() !== null;
};

const requireAuth = (redirectTo = 'login.html') => {
    if (!isAuthenticated()) {
        window.location.href = redirectTo;
        return false;
    }
    return true;
};

// Modal Management
const showModal = (title, message, type = 'info', onConfirm = null) => {
    // Remove existing modal if any
    const existingModal = document.getElementById('rovi-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'rovi-modal';
    modal.className = 'rovi-modal';
    modal.innerHTML = `
        <div class="rovi-modal-content">
            <div class="rovi-modal-header">
                <h3>${title}</h3>
                <button class="rovi-modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="rovi-modal-body">
                <p>${message}</p>
            </div>
            <div class="rovi-modal-footer">
                ${onConfirm ? `
                    <button class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button class="btn-primary" onclick="closeModal(); setTimeout(() => { ${onConfirm} }, 100);">Confirm</button>
                ` : `
                    <button class="btn-primary" onclick="closeModal()">OK</button>
                `}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
};

const closeModal = () => {
    const modal = document.getElementById('rovi-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
};

// Initialize on load
if (typeof window !== 'undefined') {
    initializeData();
    updateAllBadges();
}

