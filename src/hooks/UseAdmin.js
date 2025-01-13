import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(
							`shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/admin/${email}`,
							{
								method: "GET",
								headers: {
									"content-type": "application/json",
									authorization: `Bearer ${localStorage.getItem(
										"accessToken"
									)}`,
								},
							}
						)
							.then((res) => res.json())
							.then((data) => {
								setAdmin(data.admin);
							});

        }
    }, [user])
    return [admin]
}

export default useAdmin;