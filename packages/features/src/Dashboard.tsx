import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { webPersistor } from "store";
import { useNavigate } from "react-router-dom";
import { PublicationRouter } from "components";

const Dashboard = () => {
	const user = useSelector((state: any) => {
		return state.publicationUserSlice;
	});
	const navigate = useNavigate();
	const [showUserDetails, setShowUserDetails] = useState(false);
	const getDashboardItems = (role: any) => {
		switch (role) {
			case "admin":
				return [
					{
						name: "Publications",
						navigate: "/publications",
						isSelected: false,
					},
					{ name: "Publish", navigate: "/publish", isSelected: true },
					{ name: "Publisher", navigate: "/publisher", isSelected: false },
					{ name: "Editor", navigate: "/editor", isSelected: false },
					{ name: "Reviewer", navigate: "/reviewer", isSelected: false },
				];
			case "editor":
				return [
					{
						name: "Publications",
						navigate: "/publications",
						isSelected: false,
					},
					{ name: "Publish", navigate: "/publish", isSelected: false },
					{ name: "Edit", navigate: "/edit", isSelected: true },
				];
			case "publisher":
				return [
					{
						name: "Publications",
						navigate: "/publications",
						isSelected: false,
					},
					{ name: "publish", navigate: "/publish", isSelected: false },
				];
			default:
				return [];
		}
	};

	const [dashboardItems, setDashboardItems] = useState(
		getDashboardItems(user.role),
	);
	const handleClick = (value: any) => {
		console.log({ value });
		const updatedItems = dashboardItems.map((currentValue) => {
			return {
				...currentValue,
				isSelected: currentValue.name === value.name,
			};
		});

		setDashboardItems(updatedItems);
		navigate(`/dashboard${value.navigate}`);
	};
	console.log({ dashboardItems });
	return (
		<div>
			<div className="relative z-50 lg:hidden" role="dialog" aria-modal="true">
				<div className="fixed inset-0 bg-gray-900/80"></div>

				<div className="fixed inset-0 flex">
					<div className="relative mr-16 flex w-full max-w-xs flex-1">
						<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
							<button type="button" className="-m-2.5 p-2.5">
								<span className="sr-only">Close sidebar</span>
								<svg
									className="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
							<div className="flex h-16 shrink-0 items-center">
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=white"
									alt="Your Company"
								/>
							</div>
							<nav className="flex flex-1 flex-col">
								<ul role="list" className="flex flex-1 flex-col gap-y-7">
									<li>
										<ul role="list" className="-mx-2 space-y-1">
											<li>
												{/* <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" --> */}
												<div className="group flex gap-x-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold leading-6 text-white">
													<svg
														className="h-6 w-6 shrink-0 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
														/>
													</svg>
													Dashboard
												</div>
											</li>
											{dashboardItems.map((value: any) => {
												return (
													<li
														onClick={() => handleClick(value)}
														className={twMerge(
															"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white cursor-pointer",
															`${value.isSelected ? "bg-indigo-700" : ""}`,
														)}
													>
														<svg
															className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
															/>
														</svg>
														{value.name}
													</li>
												);
											})}
										</ul>
									</li>

									<li className="mt-auto">
										<div className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
											<svg
												className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											Settings
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Static sidebar for desktop --> */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=white"
							alt="Your Company"
						/>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									<li>
										{/* <!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" --> */}
										<li className="group flex gap-x-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold leading-6 text-white">
											<svg
												className="h-6 w-6 shrink-0 text-white"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
												/>
											</svg>
											Dashboard
										</li>
									</li>
									{dashboardItems.map((value: any) => {
										return (
											<li
												onClick={() => handleClick(value)}
												className={twMerge(
													"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white cursor-pointer",
													`${value.isSelected ? "bg-indigo-700" : ""}`,
												)}
											>
												<svg
													className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
													/>
												</svg>
												{value.name}
											</li>
										);
									})}
								</ul>
							</li>

							<li className="mt-auto">
								<div className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
									<svg
										className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									Settings
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="lg:pl-72">
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
					<button
						type="button"
						className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
					>
						<span className="sr-only">Open sidebar</span>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>

					{/* <!-- Separator --> */}
					<div
						className="h-6 w-px bg-gray-900/10 lg:hidden"
						aria-hidden="true"
					></div>

					<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
						<div className="relative flex flex-1">
							<label className="sr-only">Search</label>
							<svg
								className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
									clip-rule="evenodd"
								/>
							</svg>
							<input
								id="search-field"
								className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
								placeholder="Search..."
								type="search"
								name="search"
							/>
						</div>
						<div className="flex items-center gap-x-4 lg:gap-x-6">
							<button
								type="button"
								className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">View notifications</span>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>
							</button>

							<div
								className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
								aria-hidden="true"
							></div>

							<div className="relative">
								<button
									onClick={() => {
										setShowUserDetails((prev) => !prev);
									}}
									type="button"
									className="-m-1.5 flex items-center p-1.5"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span className="sr-only">Open user menu</span>
									<img
										className="h-8 w-8 rounded-full bg-gray-50"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
									<span className="hidden lg:flex lg:items-center">
										<span
											className="ml-4 text-sm font-semibold leading-6 text-gray-900"
											aria-hidden="true"
										>
											{user.username}
										</span>
										<svg
											className="ml-2 h-5 w-5 text-gray-400"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</button>
								{showUserDetails ? (
									<div
										className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu-button"
										tabIndex={-1}
									>
										{/* <!-- Active: "bg-gray-50", Not Active: "" --> */}

										<div
											onClick={() => {
												webPersistor.purge();
												navigate("/");
											}}
											className="block px-3 py-1 text-sm leading-6 text-gray-900"
											role="menuitem"
											tabIndex={0}
											id="user-menu-item-1"
										>
											Sign out
										</div>
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				</div>

				<main className="py-10">
					<div className="px-4 sm:px-6 lg:px-8">
						<PublicationRouter />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
