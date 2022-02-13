import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllStores, Project, User } from "../redux/types";
import * as actions from "../redux/project/actions";

export default function ProjectsPage() {

  const projects: Project[] = useSelector<AllStores>(state => state.project.projects) as Project[];
  const user: User | null = useSelector<AllStores>(state => state.auth.user) as User;

  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(actions.fetchProjects());
    }
  });

  return (
    <></>
  );
}