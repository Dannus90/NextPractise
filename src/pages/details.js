import Link from "next/link";

const people = [
    {v: 'car', name: 'daniel'},
    {v: 'cycle', name: 'john'},
    {v: 'bike', name: 'angel'},
    {v: 'train', name: 'bruno'},
]

export default function Details () {
    return <div>
        {people.map((p) => (
            <div>
                <Link as={`/${p.v}/${p.name}`} href="/[vehicle]/[person]">
                    <a>{`Navigate to ${p.name}'s ${p.v}`}</a>
                </Link>
            </div>
        ))}
        
    </div>
}