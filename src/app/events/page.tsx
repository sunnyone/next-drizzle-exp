
import {db} from "@/db/db";
import {event} from "@/db/schema/event";

export default async function EventsPage() {
    async function addEvent(data: FormData) {
        'use server';

        console.log(data);

        function toDate(s: string | undefined) {
            return s ? new Date(s) : undefined;
        }

        await db.insert(event)
            .values({
                title: data.get('title')?.toString(),
                startTime: toDate(data.get('startTime')?.toString()),
                endTime: toDate(data.get('endTime')?.toString()),
            });
    }

    const results = await db.select()
        .from(event);

    return <div>
        <table>
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

        <form action={addEvent}>
            <label>
                Title: <input name="title" />
            </label>
            <label>
                Start time: <input type="datetime-local" name="startTime" />
            </label>
            <label>
                End time: <input type="datetime-local" name="endTime" />
            </label>
            <input type="submit" value="送信" />
        </form>
    </div>

}