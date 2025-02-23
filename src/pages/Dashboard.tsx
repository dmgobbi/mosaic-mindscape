
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-mosaic-warm py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-mosaic-sage flex items-center justify-center">
                <User className="w-10 h-10 text-mosaic-dark" />
              </div>
              <div>
                <h1 className="font-display text-3xl mb-2">Welcome back, Alex!</h1>
                <p className="text-gray-600">Your next session is in 2 days</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl mb-6">Upcoming Sessions</h2>
              <div className="space-y-4">
                {[1, 2].map((session) => (
                  <div key={session} className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                    <Calendar className="h-10 w-10 text-mosaic-dark" />
                    <div>
                      <p className="font-semibold">Session with Dr. Johnson</p>
                      <p className="text-gray-600">Thursday, 3:00 PM</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((activity) => (
                  <div key={activity} className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                    <Clock className="h-6 w-6 text-mosaic-dark" />
                    <div>
                      <p className="font-semibold">Completed Session</p>
                      <p className="text-gray-600">2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
