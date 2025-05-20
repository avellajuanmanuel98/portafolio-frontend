import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Profile.css";
import { API_BASE_URL } from "../config";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  return (
    <section className="profile-section">
      <div className="section-container">
        <motion.div
          className="profile-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.avatar && (
            <motion.img
              src={`${API_BASE_URL}/uploads/${profile.avatar}`}
              alt="Avatar"
              className="profile-avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          )}

          <motion.h2
            className="profile-name"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {profile.name}
          </motion.h2>

          <motion.p
            className="profile-bio"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="profile-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {profile.links?.instagram && (
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            )}
            {profile.links?.linkedin && (
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {profile.links?.whatsapp && (
              <a
                href={`https://wa.me/${profile.links.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profile;
