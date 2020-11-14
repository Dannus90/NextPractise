import Link from "next/link"

export default function List({ownersList}) {
    return (
        <div>
            {ownersList.map((owner, index) => (
                <div key={index}>
                    <Link as={`${owner.vehicle}/${owner.ownerName}`} href="/[vehicle]/[person]">
                        <a>
                            Navigate to {owner.ownerName}'s {owner.vehicle}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

List.getInitialProps = async() => {
    const response = await fetch('http://localhost:4001/vehicles');
    const ownersList = await response.json();
    return {ownersList: ownersList}
}