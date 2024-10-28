// "use client";
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import api from "@/services/api";
// import { AboutHelper } from "@/helpers/about";
// import { IAchievements } from "@/interfaces/about";


// const aboutUsHelper = new AboutHelper(api);

// export default function Achievements() {

//     const [error, setError] = useState<string | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [achievements, setAchievements] = useState<IAchievements[]>([]);

//     useEffect(() => {
//         const getAchievements = async () => {
//             setLoading(true);
//             try {
//                 const response: IAchievements[] = await aboutUsHelper.getAchievements();
//                 setAchievements(response);
//                 setError(null);
//             } catch (error) {
//                 console.log(error);
//                 setError("Hata");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getAchievements();
//     }, []);

//     return (
//         <Card>
//             <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold mb-4">Başarılar</h3>
//                 <ul className="space-y-4">
//                     {loading ? (
//                         <div>Yükleniyor...</div>
//                     ) : (
//                         <>
//                             {error === null ? (
//                                 achievements.map((achievement, index) => (
//                                     <li key={index} className="flex items-start">
//                                         <span className="font-semibold mr-2">{achievement.year}:</span>
//                                         <span>{achievement.content}</span>
//                                     </li>
//                                 ))
//                             ) : (
//                                 <p>{error}</p>
//                             )}
//                         </>
//                     )}
//                 </ul>
//             </CardContent>
//         </Card>
//     )
// }