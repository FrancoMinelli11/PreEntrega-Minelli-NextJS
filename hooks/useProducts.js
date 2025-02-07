'use client'
import { getProducts } from "@/services/getProducts";
import { useEffect, useState } from "react";

export const useProducts = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts('https://api.escuelajs.co/api/v1/products')
        .then((res) => (res.json()))
        .then((data) => setItems(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }, [])
    return {items, loading, error}
}