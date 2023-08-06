
import {db} from "@/db/db";
import {event} from "@/db/schema/event";

export default async function EventsPage() {
    const results = await db.select()
        .from(event);

    return <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>名前</th>
        </tr></thead>
        <tbody>
        {results.map((r) => <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.title}</td>
        </tr>)}
        </tbody>
    </table>
}